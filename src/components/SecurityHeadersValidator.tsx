
import React, { useState; useEffect } from "react;";
import { motion } from "framer-motion, ";

interface SecurityHeaders {name: string; present: boolean;
}
{name: "X-Frame-Options", present: false;
severity: "high",
description: "Prevents clickjacking attacks"};
{name: "X-Content-Type-Options", present: false;
severity: "medium",
description: "Prevents MIME type sniffing"};
{name: "Referrer-Policy", present: false;
severity: "medium",
description: "Controls referrer information"};
{name: "Permissions-Policy", present: false;
severity: "medium",
description: "Controls browser features"};
