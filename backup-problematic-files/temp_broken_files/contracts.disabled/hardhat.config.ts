<<<<<<< HEAD
<<<<<<< HEAD
=======
import { HardhatUserConfig } from
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
import { HardhatUserConfig } from;
  hardhat/config;
import';@nomicfoundation/hardhat-toolbox;
import';hardhat-etherscan;
import * as dotenv from';dotenv;
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || ;';';
const AMOY_RPC_URL = process.env.AMOY_RPC_URL || '"https": //rpc-amoy.polygon.technology';';';
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https://rpc.ankr.com/polygon_mumbai';';';
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ';
const accounts = PRIVATE_KEY ? [PRIVATE_KEY] [];
const config: HardhatUserConfig: = {,
  solidity: {
    version:';0.8.2,4, ';
    "settings": {"
      optimizer: { enabled: tru,e;"
  "runs": 20,0}"
    }
  }"
  "networks": {"
    polygon_amoy: {,
  url: AMOY_RPC_UR,L;"
      "chainId": 8000,2;"
      accounts;"
      "type": ';http, '},';
    "polygon_mumbai": {"
      url: MUMBAI_RPC_UR,L;"
      "chainId": 8000,1;"
      "type": ';http, '}'}
  // "etherscan": {"
  //   apiKey: {
  //     polygonAmoy: POLYGONSCAN_API_KE,Y;"
  //     "polygonMumbai": POLYGONSCAN_API_KE,Y;""
  //   } "as": // }""
  "paths": {"
    sources,:"
  ./contracts', ';
    "tests": './tes,t, ';
    "cache": ./cache', ';
    "artifacts": './artifact,s,'}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
"export": { config }
export default config;
<<<<<<< HEAD
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: '20',0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: '8000',2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: '8000',1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/contracts.disabled/hardhat.config.ts
=======
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:contracts.disabled/hardhat.config.ts
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/contracts.disabled/hardhat.config.ts
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:contracts.disabled/hardhat.config.ts
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
"export": { config }
export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: '20',0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: '8000',2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: '8000',1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config'';; import';@nomicfoundation/hardhat-toolbox'';; import';hardhat-etherscan'';; import * as dotenv from';dotenv'';; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || '';';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
"export": { config }"
export default config;"
import { HardhatUserConfig } from hardhat/config;; import';@nomicfoundation/hardhat-toolbox;; import';hardhat-etherscan;; import * as dotenv from';dotenv;; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || ;';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: '20',0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: '8000',2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: '8000',1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
import { HardhatUserConfig } from hardhat/config;; import';@nomicfoundation/hardhat-toolbox;; import';hardhat-etherscan;; import * as dotenv from';dotenv;; dotenv.config(); const PRIVATE_KEY = process.env.PRIVATE_KEY || ;';';; const AMOY_RPC_URL = process.env.AMOY_RPC_URL || 'https: const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || 'https: const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ';; const accounts = PRIVATE_KEY ? [PRIVATE_KEY] []; const config: HardhatUserConfig: = { solidity: { version:';0.8.2,4,'; settings: { optimizer: { enabled: tru,e runs: 20,0} } } networks: { polygon_amoy: { url: AMOY_RPC_UR,L chainId: 8000,2 accounts type: ';http,'},'; polygon_mumbai: { url: MUMBAI_RPC_UR,L chainId: 8000,1 accounts type: ';http,'}'} paths: { sources,: ./contracts','; tests: './tes,t,'; cache: ./cache','; artifacts: './artifact,s,'} } export: { config } export default config;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
