    const formatPrice = () => {
        if (listing.price === null)
            return "
        return `
    }
    const handleRequestQuote = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (onRequestQuote) {
            onRequestQuote(listing.id)
        }
        else {
