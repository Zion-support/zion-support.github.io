#!/usr/bin/env node;
;
const fs = require('fs');
const path = require('path');
;
function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive:true }); }
;
function main() {;
  const outDir = path.join(process.cwd(), 'public', 'nft');
  ensureDir(outDir);
<<<<<<< HEAD
  const base = {;
    attributes:[;
      { trait_type:'Attestation Layer', value:'ZK-L2' },;
      { trait_type:'Entropy Source', value:'Day Zero' }
    ],;
    description:'A Day Zero key forged during the first Genesis vote.';
=======
  const base = {
    attributes: [
      { trait_type: 'Attestation Layer', value: 'ZK-L2' };
      { trait_type: 'Entropy Source', value: 'Day Zero' }
    ];
    description: 'A Day Zero key forged during the first Genesis vote.'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  };
  const constellations = ['Cygnus-12', 'Orion-7', 'Lyra-9', 'Draco-3', 'Aquila-5'];
  const rarity = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
;
  const files = [];
<<<<<<< HEAD
  for (let i = 1; i <= 10; i++) {;
    const meta = {;
      name:`Genesis Key #${String(i).padStart(3, '0')}`,;
      animation_url:`ipfs://CID/key${String(i).padStart(3, '0')}.mp4`,;
      attributes:[;
        { trait_type:'Quorum Constellation', value:constellations[i % constellations.length] },;
        ...base.attributes,;
        { trait_type:'Rarity', value:rarity[i % rarity.length] }
      ],;
      description:base.description;
=======
  for (let i = 1; i <= 10; i++) {
    const meta = {
      name: `Genesis Key #${String(i).padStart(3, '0')}`;
      animation_url: `ipfs://CID/key${String(i).padStart(3, '0')}.mp4`;
      attributes: [
        { trait_type: 'Quorum Constellation', value: constellations[i % constellations.length] };
        ...base.attributes;
        { trait_type: 'Rarity', value: rarity[i % rarity.length] }
      ];
      description: base.description
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    };
    const file = path.join(outDir, `genesis-key-${String(i).padStart(3, '0')}.json`);
    fs.writeFileSync(file, JSON.stringify(meta, null, 2));
    files.push(file);
  }
  console.log('Generated NFT pack files:', files.length);
}
;
main();