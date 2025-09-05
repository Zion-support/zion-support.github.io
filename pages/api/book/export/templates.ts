import type {_NextApiRequest, _NextApiResponse} from 'next';

const _templates = {_lulu: {
    sizes: [
      { name: 'US Letter', _widthIn: 8.5, _heightIn: 11, _bleedIn: 0.125, _marginIn: 0.75},
      {_name: 'A4', _widthIn: 8.27, _heightIn: 11.69, _bleedIn: 0.125, _marginIn: 0.75}]},
  blurb: {_sizes: [
      { name: 'Standard Portrait', _widthIn: 8, _heightIn: 10, _bleedIn: 0.125, _marginIn: 0.75},
      {_name: 'Large Square', _widthIn: 12, _heightIn: 12, _bleedIn: 0.125, _marginIn: 0.75}]},
  amazon: {_sizes: [
      { name: 'US Trade', _widthIn: 6, _heightIn: 9, _bleedIn: 0.125, _marginIn: 0.75},
      {_name: 'Letter', _widthIn: 8.5, _heightIn: 11, _bleedIn: 0.125, _marginIn: 0.75}]}};

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_res.status(200).json(templates);}