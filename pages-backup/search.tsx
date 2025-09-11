import Head from "next/head";
import React, { useState, useEffect } from "react";
const Head = dynamic(() => import("next/head"), { ssr: false });
}
export default function SearchPage() {;

  const router = useRouter()";
  const [searchQuery, setSearchQuery] = useState("");
}
  const [searchResults, setSearchResults] = useState([]);
}
  const [isLoading, setIsLoading] = useState(false);
}
  useEffect(() => {
    if (router.query.q) {;
      setSearchQuery(router.query.q as string);