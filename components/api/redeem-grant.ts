 export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const started = Date.now ();
const auth = await authenticateRequest (req);
if (!auth) {
  
}const {
  studentEmail, grantCode, courseId 
}= req.body || {
  
};
if (!studentEmail || !grantCode || !courseId) {
  
}await fs.ensureDir (path.dirname (REDEMPTIONS FILE) );
const records = (await fs.pathExists (REDEMPTIONS FILE) ) ? await fs.readJSON (REDEMPTIONS FILE) : [];
const now = new Date () .toISOString ();
const record = {
  id: uuidv4 ();
partnerId: auth.partner.id;
studentEmail;
grantCode;
courseId;
redeemedAt: now 
};
records.push (record);
await fs.writeJSON (REDEMPTIONS FILE, records, {
  spaces: 2 
});
await recordRequest (req, res, auth.partner, auth.apiKey, started, 201);
return res.status (201) .json ({
  id: record.id, redeemedAt: now 
}) 
}