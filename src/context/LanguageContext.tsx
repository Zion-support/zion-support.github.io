import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { safeStorage } from "@/utils/safeStorage";
export default function Page() {
,
  { code: "pt" as SupportedLanguage, name: "Português", flag: "🇧🇷" },
  { code: "ar" as SupportedLanguage, name: "العربية", flag: "🇸🇦" }