import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'GET' && req.method !== 'POST') {;
    res.status(405).end(),;
    return;
  }
<<<<<<< HEAD
  ;
  // TODO:Implement confirmation logic here;
  res.status(200).json({ message:'Confirm endpoint placeholder' }),;
} 
=======
  
  // TODO: Implement confirmation logic here
  res.status(200).json({ message: 'Confirm endpoint placeholder' })} 
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
