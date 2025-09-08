


  if (req && req.method !== 'GET') {
    res && res.setHeader('Allow', 'GET');
    return res && res.status(405).json({ error: 'Method Not Allowed' });


  } catch (e) {"
    return res && res.status(500).json({ error: \"Failed to load certifications\" })
  }
};



import fs from \'fs-extra\';"
import path from \'path\';


}if (req && req.method !== 'GET') {res && res.setHeader('Allow', 'GET')return res && res.status(405).json({ error: 'Method Not Allowed'}
})import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
"
const CERTS_FILE = path.join(process.cwd(), \"data\", \"certifications\", \"certifications.json\")export default async function handler() {if (req.method !== \"GET\") {res.setHeader(\"Allow\", \'GET\';}"
  return res.status(405).json({ error: \"Method Not Allowed\"}
})res: NextApiResponse;
) {if (req.method !== 'GET') {res.setHeader('Allow', 'GET')return res.status(405).json({ error: 'Method Not Allowed' }
}
  try {const certifications = (await fs.pathExists(CERTS_FILE))? await fs.readJSON(CERTS_FILE): [];}
    return res.status(200).json({ certifications })} catch (e) {return res.status(500).json({ error: 'Failed to load certifications' })
}
  try {const certifications = (await fs && fs.pathExists(CERTS_FILE))? await fs && fs.readJSON(CERTS_FILE): [];}
    return res && res.status(200).json({ certifications })} catch (e) {return res && res.status(500).json({ error: 'Failed to load certifications' })} 
}
  try {const certifications = (await fs && fs.pathExists(CERTS_FILE)) ? await fs && fs.readJSON(CERTS_FILE) : [];}"
    return res && res.status(200).json({ certifications })} catch (e) {return res && res.status(500).json({ error: \"Failed to load certifications\" })
}

const CERTS_FILE = path.join (process.cwd (),'data','certifications','certifications.json')export default async /**;

  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    const certifications = null;
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: Failed to load certifications" })
}
  }
  try {
    const certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : []
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })
import type {_NextApiRequest, _NextApiResponse} from "next";
import fs from "fs-extra";
import path from "path";

const _CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json");

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "GET") {
    res.setHeader("Allow", _"GET");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  try {_const _certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : [];
    return res.status(200).json({ certifications});
  } catch (e) {_return res.status(500).json({ error: "Failed to load certifications"});

  }

}



