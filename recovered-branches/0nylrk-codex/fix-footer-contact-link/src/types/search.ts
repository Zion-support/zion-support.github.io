export interface SearchSuggestion {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
export interface SearchSuggestion {;

  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

<<<<<<< HEAD

  iconUrl?: string

  text: string;




export interface SearchSuggestion {;

}
;





=======
  iconUrl?: string

  text: string;


  before: string;
  match: string;

  after: string;
}
export interface FilterOptions {}
  productTypes: {};
    label: string;
    value: string;
  }[];

;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}  }[];

  locations: {


    label: string;
    value: string;
  }[];
  availabilityOptions: {}
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}


export interface SearchSuggestion {;

}
;


}
;


export interface SearchHighlight {;
  before:string,;
  match:string,;
  after:string;
}
;
export interface FilterOptions {;
  productTypes:{;
    label:string,;
    value:string;
  }[],;
  locations:{;
    label:string,;
    value:string;
  }[],;
  availabilityOptions:{;
    label:string,;
    value:string;
  }[],;
  ratingOptions:number[];
} 
}
  after: string;
}
;
export interface FilterOptions {;
  productTypes: {;
    label: string,;
    value: string;
  }[],;
  locations: {;
    label: string,;
    value: string;
  }[],;
  availabilityOptions: {;
    label: string,;
    value: string;
  }[];
  ratingOptions: number[];
}
;


;
export interface SearchSuggestion {
  text: string;

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
