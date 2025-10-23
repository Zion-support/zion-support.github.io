import React from "react";
"use client";
const SupportPage: React.FC = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const _supportChannels = [
    {

  ];

  const _faqs = [
    {
      question: "How do I get started with your AI services?",
      answer:

    },
  ];

  const _categories = [
    { id: "all", name: "All Topics" },
    { id: "getting-started", name: "Getting Started" },
    { id: "project-management", name: "Project Management" },
    { id: "support", name: "Support" },
    { id: "integration", name: "Integration" },
    { id: "security", name: "Security" },
    { id: "training", name: "Training" },
  ];

  const _filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const _matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default Page;

export default SupportPage;
