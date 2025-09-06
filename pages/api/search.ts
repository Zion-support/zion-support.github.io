
import type { NextApiRequest, NextApiResponse } from "next"
import type { AccessLevel } from "../../utils/search/
import { parseQueryToFilters } from "../../utils/search/
import { searchAll, suggestDidYouMean } from "../../utils/search/