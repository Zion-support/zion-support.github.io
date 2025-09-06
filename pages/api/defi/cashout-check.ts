
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
