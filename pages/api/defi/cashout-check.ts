

  } catch {}
    return {}
  }
}

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string };'
  if (!userId || typeof amount !== 'number') return res.status(400).json({ error: 'Missing userId or amount' });
'
  if (amount <= THRESHOLD) return res.status(200).json({ allowed: true, reason: 'Below threshold' });'
  if (!profile) return res.status(200).json({ allowed: false, reason: 'KYC not started' });'
  if (profile.status !== 'approved') return res.status(200).json({ allowed: false, reason: 'KYC not approved' });'
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json({ allowed: false, reason: 'AML alert' });





function load(): Record<string, KycProfile> {}
  try {'
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {;
    return {  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"