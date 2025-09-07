
    const listing = listings.find(item => item.id === listingId)
    if (listing) {
      }
      toast({

    // Filter listings by category;
    const categoryTitle = currentCategory.title,
    const filteredListings = MARKETPLACE_LISTINGS.filter(listing =>;
      listing.category.toLowerCase() === categoryTitle.toLowerCase();

    setIsLoading(false);
  }, [slug])}
        }
      });
    }

              {category.description}
          }
        }
      })
    }
  }
  }};
  },
return (;
                <ProductListingCard,
key={listing.id}
                  listing={listing}

              {listings && listings.map((listing) => (;
                <ProductListingCard
}
key={listing && listing.id}
                  listing={listing}
                  onRequestQuote={handleRequestQuote} />;
              ))}
            </div>;

  //Cast to specify the expected route param type since useParams may be untyped const {
  }
  slug
}= useParams () as {

const navigate = useNavigate ();
const [isLoading, setIsLoading] = useState (true);
const [listings, setListings] = useState (MARKETPLACE LISTINGS);
const [category, setCategory] = useState< {
  }
  "title": string, "description": string, "icon": JSX.Element
}> ({
  //Map of category slugs to their display data const categoryData = {

}

}
useEffect ( () => {
  }
  setIsLoading (true);
//Find the category data based on slug const currentCategory = categoryData[slug as keyof typeof categoryData] || {
  //Filter listings by category listing.category.toLowerCase () === categoryTitle.toLowerCase () );
//If we don't have real listings for this category, generate placeholder listings const listingsToShow = filteredListings.length > 0 ? filteredListings : Array (4) .fill (null) .map ( (, index) => ({'
  }
  "id": `$ {`  }
  slug
}-$ {
  }
  index
}`;`"title": `$ {`  }
  currentCategory.title
}Product $ {

}) );
setListings (listingsToShow);
setIsLoading (false)
}, [slug]);
//Handle requesting a quote
}
})
}

  listings.map ( (listing) => (<ProductListingCard key= {
  }
  listing.id
}listing= {
  }
  listing
}onRequestQuote= {
  }
  handleRequestQuote
} />) )
}</div>)
}</div> </div> <Footer /> </>)
}
  );
}

