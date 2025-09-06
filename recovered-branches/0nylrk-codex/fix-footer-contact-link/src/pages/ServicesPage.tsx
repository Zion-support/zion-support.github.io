    description: "Transform your legacy systems into modern, agile infrastructure that supports innovation and business growth.";
    category: "Consulting",;
    price: 8500,;
    currency: "$",;
    tags: ["Digital Transformation", "Legacy Systems", "Infrastructure"];

export default function ServicesPage() {;
  return (
                Request a Quote;
              </Button>;
            </Link>;
          </div>;
        </div>;
      </div>;
      <DynamicListingPage
        title="IT & AI Services"
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management."
        categorySlug="services"
        listings={SERVICE_LISTINGS}
        categoryFilters={SERVICE_FILTERS}
        initialPrice={{ min: 3000, max: 10000 }}
=======
      <DynamicListingPage;
        title="IT & AI Services";
        description="Find expert technology service providers for your business needs, from AI development to infrastructure management.";
        category_slug="services";
        listings={SERVICE_LISTINGS}
        category_filters={SERVICE_FILTERS}
        initial_price={{ min: 3000, max: 10000 }}
      />;
      <TrustedBySection />;
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
