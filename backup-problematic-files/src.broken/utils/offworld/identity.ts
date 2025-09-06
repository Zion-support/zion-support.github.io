let DIDKit:any,;
let ethers:any,;

async function lazyLoadDeps() {;
  try {;
    DIDKit = await import('@spruceid/