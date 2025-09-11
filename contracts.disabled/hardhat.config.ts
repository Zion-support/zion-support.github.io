import { HardhatUserConfig } from
  hardhat/config'';
import';@nomicfoundation/hardhat-toolbox'';
import';hardhat-etherscan'';
import * as dotenv from';dotenv'';
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';
const AMOY_RPC_URL = process.env.AMOY_RPC_URL || '"https": //rpc-amoy.polygon.technology';';';
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https://rpc.ankr.com/polygon_mumbai';';';
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] [];
const config: HardhatUserConfig: = {
  solidity: {
    version:';0.8.2,4, ';
    "settings": {
      optimizer: { enabled: tru,e
  "runs": 20,0}
    }
  }
  "networks": {
    polygon_amoy: {
      url: AMOY_RPC_UR,L
      "chainId": 8000,2
      accounts
      "type": ';http, '},';
    "polygon_mumbai": {
      url: MUMBAI_RPC_UR,L
      "chainId": 8000,1
      accounts
      "type": ';http, '}'}
  // "etherscan": {
  //   apiKey: {
  //     polygonAmoy: POLYGONSCAN_API_KE,Y
  //     "polygonMumbai": POLYGONSCAN_API_KE,Y
  //   } "as": // }
  "paths": {
    sources,:
  ./contracts', ';
    "tests": './tes,t, ';
    "cache": ./cache', ';
    "artifacts": './artifact,s,'}
}
"export": { config }
export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: '20',0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: '8000',2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: '8000',1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;

import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;

=======

import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;

=======
=======import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5


