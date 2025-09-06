
import type { NextApiRequest, NextApiResponse } from "next";
import { createDispute, readAllDisputes } from "../../../utils/fsdb";
import { parseUserFromRequest } from "../../../utils/auth";
import { DisputeCase, DisputeReason } from "../../../types/disputes";
import { generateCaseId } from "../../../utils/fsdb";
export default async function handler(

  const user = parseUserFromRequest(req);
  if (req.method === "GET") {
    const all = await readAllDisputes();

    let filtered = all;
    // Check condition
if ( {) {
  $2
}
      filtered = all.filter (
        (d) => d.clientUserId === user.id || d.talentUserId === user.id,
      );
    }
    return res.status (200).json ({ disputes: filtered });
  }

    await createDispute(dispute);
    return res.status(201).json({ dispute });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
