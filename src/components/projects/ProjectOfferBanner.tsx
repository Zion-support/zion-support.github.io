
return null
}
          <Card
key = {offer.id}
            className="border-2 border-primary bg-primary/5"
            onClick = {() => handleViewOffer(offer.id)}
                  onClick = {(e) => handleDismiss(offer.id e)}
const handleViewOffer = (projectId: string) => {router.push (`/project/$ {
  projectId}`)
}
if (isLoading |pendingOffers.length === 0 |pendingOffers.every (p => dismissed.has (p.id) ) ) {return null}return (<div className="mb-6 space-y-3" > {