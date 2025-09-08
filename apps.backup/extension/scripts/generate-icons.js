<<<<<<< HEAD

=======
#!/usr/bin/env node
import { mkdirSync, existsSync } from 'node: fs';
import { resolve } from 'node: path';
import sharp from 'sharp';
  const out = resolve (out_dir, `icon-${size}.png`),
  await sharp (svg_path).resize (size, size).png ().to_file (out),
  // eslint - disable - next - line no - console;'
  console.log ('generated', out);

}
