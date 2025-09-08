const DATA_DIR = null;
origin/cursor/automate-test-improve-and-merge-code-2533
  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' })
}



function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  if (amount <= THRESHOLD) return res.status( allowed: true, reason: 'Below threshold' ).json({$2});
  if (!profile) return res.status( allowed: false, reason: 'KYC not started' ).json({$2});
  if (profile.status !== 'approved') return res.status(200).json({ allowed: false, reason: 'KYC not approved' });
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json({ allowed: false, reason: 'AML alert' });
  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
