import React from "react";
import { Button } from "@/components/ui/button";
import { useRequestQuoteWizard } from "@/context";
import { FavoriteButton } from "@/components/FavoriteButton";

interface ServiceCardProps {
  title: string,
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  className = ''
}) => {
  return (
    <div
      data-testid={`service-card-${service.id}`}
      onClick={handleClick}
      className="cursor-pointer p-4 border border-zion-blue-light rounded-lg bg-zion-blue-dark hover:border-zion-purple/50 relative"
    >
      <FavoriteButton itemId={service.id} itemType="service" />
      <h3 className="text-white font-medium mb-2">{service.title}</h3>
      <Button size="sm" onClick={handleRequestQuote} data-testid="request-quote-btn">
        Request Quote
      </Button>
    </div>
  );
};

      <div className="mt-6 pt-6 border-t border-gray-100">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>  )
};
export default ServiceCard;
