

}

  return res.status(200).json({ ok: true });
}
  const { address, signature } = req.body || {};
  if (!address || !signature)
    return res.status(400).json({ error: "Missing address or signature" });
  // In production: verify signature, mint or issue POAP
  console.log(
    "[NFT Claim] address:",
    address,
    "signature:",
    signature.slice(0, 18) + "…",
  );
  return res.status(200).json({ ok: true });
}

}
