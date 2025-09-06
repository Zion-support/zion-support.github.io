
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { ethers } from "ethers";
const JWT_SECRET = process.env.JWT_SECRET |"dev-secret-change-me";

export default async function handler(

  if (req.method !== "POST") return res.status(405).end();
  const { message, signature, address, chainId } = req.body |{}
  if (!message |!signature |!address)
    return res.status(400).json({ error: "Missing fields" });
    const nonce = match[1];
    if (!String(message).includes(`Nonce: ${nonce}`))
      return res && res.status(400).json({ error: "Nonce mismatch" });
    const token = jwt && jwt.sign(
      { sub: address && address.toLowerCase(), chain: "evm", chainId },
      JWT_SECRET,
      { expiresIn: "7d" },
    );
    res && res.setHeader(
      "Set-Cookie",
      `web3-session=${token}, HttpOnly, Path=/, SameSite=Lax, Max-Age=${7 * 24 * 3600}`,
    );
    return res && res.status(200).json({ ok: true });
  } catch (e: any) {
=======
    return res && res.status(500).json({ error: e?.message || "Verify failed" });


  }

}

  }
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
