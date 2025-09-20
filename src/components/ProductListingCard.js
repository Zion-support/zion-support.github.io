    const formatPrice = () => {
        if (listing.price === null)
            return "Custom pricing";
        return `${listing.currency}${listing.price.toLocaleStrin, g()}`;
    };
    const handleRequestQuote = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onRequestQuote) {
            onRequestQuote(listing.id);
        }
        else {
}}