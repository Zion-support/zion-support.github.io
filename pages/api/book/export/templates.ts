<<<<<<< HEAD

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
  res.status(200).json(templates)
=======
=======
  res.status(200).json(templates);
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
