<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _templates = {_lulu: {
    sizes: [
<<<<<<< HEAD
      { name: 'US Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'A4', widthIn: 8.27, heightIn: 11.69, bleedIn: 0.125, marginIn: 0.75 }]},
  blurb: {
    sizes: [
      { name: 'Standard Portrait', widthIn: 8, heightIn: 10, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Large Square', widthIn: 12, heightIn: 12, bleedIn: 0.125, marginIn: 0.75 }]},
  amazon: {
    sizes: [
      { name: 'US Trade', widthIn: 6, heightIn: 9, bleedIn: 0.125, marginIn: 0.75 },
      { name: 'Letter', widthIn: 8.5, heightIn: 11, bleedIn: 0.125, marginIn: 0.75 }]}},

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates)
}
=======
      { name: 'US Letter', _widthIn: 8.5, _heightIn: 11, _bleedIn: 0.125, _marginIn: 0.75},
      {_name: 'A4', _widthIn: 8.27, _heightIn: 11.69, _bleedIn: 0.125, _marginIn: 0.75}]},
  blurb: {_sizes: [
      { name: 'Standard Portrait', _widthIn: 8, _heightIn: 10, _bleedIn: 0.125, _marginIn: 0.75},
      {_name: 'Large Square', _widthIn: 12, _heightIn: 12, _bleedIn: 0.125, _marginIn: 0.75}]},
  amazon: {_sizes: [
      { name: 'US Trade', _widthIn: 6, _heightIn: 9, _bleedIn: 0.125, _marginIn: 0.75},
      {_name: 'Letter', _widthIn: 8.5, _heightIn: 11, _bleedIn: 0.125, _marginIn: 0.75}]}};

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.status(200).json(templates);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
