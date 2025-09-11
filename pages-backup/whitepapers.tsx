import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
  ];

  const categories = [];
  const [selectedCategory, setSelectedCategory] = React.useState();
}
  const [searchQuery, setSearchQuery] = React.useState("");
}
  const filteredWhitepapers = whitepapers.filter(paper => {;
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         paper.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));