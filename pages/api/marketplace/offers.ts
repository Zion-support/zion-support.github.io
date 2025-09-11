>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import {


import {
  assertClient
  assertTalentOrClientForOffer
  getDemoUser
} from "../../../utils/marketplace/auth";
import {
  getOfferById
  listOffers
  saveOffer
  saveProject
import type { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuidv4 } from "uuid";

import {

  assertClient,
  assertTalentOrClientForOffer,
  getDemoUser,;
} from "../../../utils/marketplace/auth";
import {
  getOfferById,
  listOffers,
  saveOffer,
  saveProject,;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
