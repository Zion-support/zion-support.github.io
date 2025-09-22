
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface SearchSuggestion {;
  text:string;
  type:'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent';
  iconUrl?:string;
}
;
export interface SearchHighlight {;
  before:string;
  match:string;
  after:string;
}
;
export interface FilterOptions {;
  productTypes:{;
    label:string;
    value:string;
  }[];
  locations:{;
    label:string;
    value:string;
  }[];
  availabilityOptions:{;
    label:string;
    value:string;
  }[];
  ratingOptions:number[];
} 
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
