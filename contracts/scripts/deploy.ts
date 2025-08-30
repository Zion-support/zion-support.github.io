import ethers from 'hardhat';
async function main() {
  const [deployer] = await ethers.getSigners();
<<<<<<< HEAD
  // // // // // console.log('Deploying with:', deployer.address);
=======
  // // // // // // // // console.log('Deploying with:', deployer.address);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  const ZION = await ethers.getContractFactory('ZIONToken');
  const token = await ZION.deploy(deployer.address);
  await token.waitForDeployment();
  const addr = await token.getAddress();
  const totalSupply = await token.totalSupply();
<<<<<<< HEAD
  // // // // // console.log('ZIONToken deployed at:', addr);
  // // // // // console.log('Total supply:', totalSupply.toString());

main().catch((error) => {
  // // // console.error(error);
=======
  // // // // // // // // console.log('ZIONToken deployed at:', addr);
  // // // // // // // // console.log('Total supply:', totalSupply.toString());
}
main().catch((error) => {
  // // // // // // // console.error(error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  process.exitCode = 1;
});}