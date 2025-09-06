 import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {

  }
}

function chapterToHtml(text: string): string {
  if (!text) return '';

