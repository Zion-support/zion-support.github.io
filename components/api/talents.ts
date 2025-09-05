 export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now ();
const auth = await authenticateRequest (req);
if (!auth) {
  
}const {
  name, email, skills, programTrack, certificationStatus 
}= req.body || {
  
};
if (!name || !email) {
  
}await fs.ensureDir (path.dirname (TALENTS FILE) );
const records = (await fs.pathExists (TALENTS FILE) ) ? await fs.readJSON (TALENTS FILE) : [];
const now = new Date () .toISOString ();
const record = {
  id: uuidv4 ();
name;
email;
skills: skills || [];
programTrack: programTrack || null;
certificationStatus: certificationStatus || "pending";
partnerId: auth.partner.id;
createdAt: now 
};
records.push (record);
await fs.writeJSON (TALENTS FILE, records, {
  spaces: 2 
});
await recordRequest (req, res, auth.partner, auth.apiKey, started, 201);
return res.status (201) .json ({
  id: record.id 
}) 
}