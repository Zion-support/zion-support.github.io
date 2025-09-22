
    const match = cookieHeader.match(/siwe-nonce=([^]+)/);
    if (!match) return res.status(400).json({ error: 'Missing nonce' });
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`)) return res.status(400).json({ error: 'Nonce mismatch' });
    const sigBytes = bs58.decode(signature);
    const msgBytes = new TextEncoder().encode(message);
    const pubKeyBytes = bs58.decode(publicKey);
    const ok = nacl.sign.detached.verify(msgBytes, sigBytes, pubKeyBytes);
    if (!ok) return res.status(401).json({ error: 'Invalid signature' });

