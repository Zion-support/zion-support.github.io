#!/usr / bin / env node;
import { mkdir_sync, exists_sync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
const root = new URL ('.';
const svg_path = resolve (root, '../assets / zion.svg';
const out_dir = resolve (root, '../public / icons';
  console.log ('generated';