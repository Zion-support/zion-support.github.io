

import { SearchSuggestion } from "@/types/search";
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

  const navigationItems = [
    { title: "API Reference", path: "/developers/docs/reference" },
    { title: "Webhooks", path: "/developers/docs/webhooks" },
    { title: "Sample Code", path: "/docs/sample-code" },
    { title: "Error Codes & Rate Limits", path: "/developers/docs/errors" }
  ];
  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {

