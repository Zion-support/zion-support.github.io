
  }

  }
  try {
  try {;
    const { name, email, role, country, source } = req.body || {};

=======

  }
  try {


import type { NextApiRequest, NextApiResponse } from 'next';



  try {;
    const { name, email, role, country, source } = req.body || {};


    const { name, email, role, country, source } = req.body |{}
    if (!name |!email |!role |!country) {

      return res.status(400).json({ error: "Missing required fields" });

import type { NextApiRequest, NextApiResponse } from './next';
import { supabase  } from '../../../utils / supabase / client';
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {
    const { name, email, role, country, source } = req && req.body || {};
    if (!name || !email || !role || !country) {
return res && res.status(400).json({ error: "Missing required fields" });
=======
  }
  try {


import type { NextApiRequest, NextApiResponse } from 'next';



  try {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const { name, email, role, country, source } = req.body || {};
    if (!name || !email || !role || !country) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    const { name, email, role, country, source } = req.body || {};
    if (!name || !email || !role || !country) {
      return res.status(400).json({ error: 'Missing required fields' })
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    const { data, error } = await supabase
      .from("summit_registrations")
      .insert([
    country,
          source: source || 'zion-global-2025',
          created_at: new Date().toISOString()}])
      .select('*')
=======
    return res.status(500).json({ error: e?.message || 'Unknown error' })

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
