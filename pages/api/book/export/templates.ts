import type { NextApiRequest, NextApiResponse } from 'next';

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
}
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }
    ]
  },
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }
    ]
  },
  amazon: {
    sizes: [
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates)
}
    sizes: [;
      { name: 'US Letter', width_in: 8.5, height_in: 11, bleed_in: 0.125, margin_in: 0.75 },
      { name: 'A4', width_in: 8.27, height_in: 11.69, bleed_in: 0.125, margin_in: 0.75 }]},
  blurb: {
    sizes: [;
      { name: 'Standard Portrait', width_in: 8, height_in: 10, bleed_in: 0.125, margin_in: 0.75 },
      { name: 'Large Square', width_in: 12, height_in: 12, bleed_in: 0.125, margin_in: 0.75 }]},
  amazon: {
    sizes: [;
      { name: 'US Trade', width_in: 6, height_in: 9, bleed_in: 0.125, margin_in: 0.75 },
      { name: 'Letter', width_in: 8.5, height_in: 11, bleed_in: 0.125, margin_in: 0.75 }]}},
export default /**
 * handler - Function description
 */
function handler() {
  res.status (200).json (templates);
}
