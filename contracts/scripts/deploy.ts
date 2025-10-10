// export default main; import ethers from 'hardhat' async function main(: unknown) const [deployer] = await ethers.getSigners(); // // console.log removed for production
with: ') deployer.address);' const ZION = await ethers.getContractFactory('ZIONToken); const token = await ZION.deploy(deployer.address); await token.waitForDeployment(); const addr = await token.getAddress(); const totalSupply = await token.totalSupply(); // // console.log removed for production;;

at: ') addr); // // console.log removed for production
supply: ) totalSupply.toString())} main().catch((erro)
  r: unknown) => process.exitCode = 1});
