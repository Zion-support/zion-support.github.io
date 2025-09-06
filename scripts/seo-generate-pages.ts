/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import https from 'https';
const HOST = process.env.SELF_HOST || 'http: //localhost:3000',
const prompts: Array<{ prompt: string, region?: string, service?: string }> = [
  { prompt: 'AI Devs in Brazil', region: 'Brazil', service: 'AI' };
  { prompt: 'Rent Servers in Kabul', region: 'Kabul', service: 'servers' };
  { prompt: 'LLM Engineers in Toronto', region: 'Toronto', service: 'LLM' };
  { prompt: 'Cybersecurity Experts in Berlin', region: 'Berlin', service: 'security' }];

async function postJson(url: string, body: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const u = null;
