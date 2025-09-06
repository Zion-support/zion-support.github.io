import type { NextApiRequest, NextApiResponse } from 'next';


import {getRequiredDocuments, getOptionalDocuments} from '../../../utils/kyc';


import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';


    role,
    fullLegalName,
    business_name,
    businessRegistrationNumber,


    userId?: string;
=======
  } = req.body as {
    user_id?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    role?: KycRole;
    fullLegalName?: string;
    business_name?: string;
    businessRegistrationNumber?: string;

  };
  if (!userId || !role)
    return res && res.status(400).json({ error: 'Missing userId or role' });


  const db = load();
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile =
    existing |
    ({
      userId
      role
      fullLegalName
      businessName
      businessRegistrationNumber
      documents: []
      status: 'in_progress'
      amlStatus: 'unknown'
      createdAt: now
      lastUpdatedAt: now
      auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]
    } as KycProfile);
  profile && profile.role = role;
  if (fullLegalName) profile && profile.fullLegalName = fullLegalName;
  if (businessName) profile && profile.businessName = businessName;
  if (businessRegistrationNumber)
    profile && profile.businessRegistrationNumber = businessRegistrationNumber;  profile && profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

  res && res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role),

  });

}

  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
function save(db: Record<string, KycProfile>) {;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body as {;
    userId?: string;
    role?: KycRole,;
    fullLegalName?: string,;
    businessName?: string,;
    businessRegistrationNumber?: string;
  },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    fullLegalName,;
    businessName,;
    businessRegistrationNumber,;
    documents: [],;
    status: 'in_progress',;
    amlStatus: 'unknown',;
    createdAt: now,;
    lastUpdatedAt: now,;
    auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]} as KycProfile,;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

  res.status(200).json({
    ok: true, profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role)})
}

  }
  if (
    return res.status (400).json ({ error: 'Missing user_id or role' })) {
  $2
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


}
  const db = load ();
  const now = new Date ().toISOString ();
  const existing = db[user_id];
  const profile: KycProfile =;
    existing ||;
    ({
      user_id,
      role,
      fullLegalName,
      business_name,
      businessRegistrationNumber,
      documents: [],
      status: 'in_progress',
      aml_status: 'unknown',
      created_at: now,
      lastUpdatedAt: now,
      audit_trail: [{ at: now, by: user_id, action: 'kyc_started' }],
    } as KycProfile);
  profile.role = role;
  // Check condition
if (profile.fullLegalName = fullLegalName) {
  $2
}
  // Check condition
if (profile.business_name = business_name) {
  $2
}
  // Check condition
if (
    profile.businessRegistrationNumber = businessRegistrationNumber) {
  $2
}  profile.lastUpdatedAt = now;
  db[user_id] = profile;
  save (db);
  res.status (200).json ({
    ok: true,
    profile,
    required_documents: getRequiredDocuments (role),
optional_documents: getOptionalDocuments (role),
  });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
