import ethers from 'hardhat';
<<<<<<< HEAD
=======

>>>>>>> origin/auto/autonomy-17186719616
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying with:', deployer.address);
  const ZION = await ethers.getContractFactory('ZIONToken');
  const token = await ZION.deploy(deployer.address);
  await token.waitForDeployment();
  const addr = await token.getAddress();
  const totalSupply = await token.totalSupply();
  console.log('ZIONToken deployed at:', addr);
  console.log('Total supply:', totalSupply.toString());
}
<<<<<<< HEAD
=======

>>>>>>> origin/auto/autonomy-17186719616
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});