<<<<<<< HEAD
import React from
  'react'; // Assuming TalentProfileData is the type of items in TALENT_PROFILES" // Basic ObjectId validation helper const isValidObjectId = (id: string): boolean => /^[0-9a-fA-F]{24}$/.test(id); // Define the structure of the response profile, including the added social links interface TalentProfileWithSocial extends TalentProfileData { social: { twitter: string; linkedin: string; }; } interface ErrorResponse { error: string; } export default function handler( req: NextApiRequest, 
=======
import React from 'react'; // Assuming TalentProfileData is the type of items in TALENT_PROFILES" // Basic ObjectId validation helper const isValidObjectId = (id: string): boolean => /^[0-9a-fA-F]{24}$/.test(id); // Define the structure of the response profile, including the added social links interface TalentProfileWithSocial extends TalentProfileData { social: { twitter: string; linkedin: string; }; } interface ErrorResponse { error: string; } export default function handler( req: NextApiRequest,
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
