

import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextApiRequest, NextApiResponse } from 'next',;
;
const templates = {
  lulu: {
    sizes: [
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }]}
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]}
  amazon: {
    sizes: [
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 }
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates)
  res.status(200).json(templates);
};
import type { NextApiRequest, NextApiResponse } from 'next';
const templates = {;
  lulu: {;
    sizes: [;
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 },;
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }]},;
  blurb: {;
    sizes: [;
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },;
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]},;
  amazon: {;
    sizes: [;
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 },;
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}};
export default function handler(req, res) {
  try {
  res.status(200).json(templates);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
}
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
