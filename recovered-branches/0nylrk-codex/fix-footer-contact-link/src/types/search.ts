export interface SearchSuggestion {
  text: string;
  type: "product" | "category" | "tag" | "skill" | "person" | "recent";
  iconUrl?: string;
}
<<<<<<< HEAD
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}
export interface FilterOptions {
  productTypes: {
<<<<<<< HEAD

=======
    label: string;
    value: string;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  }[];
  locations: {
    label: string;
    value: string;
  }[];
  availabilityOptions: {
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}
<<<<<<< HEAD
=======
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface SearchSuggestion {;

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

export interface SearchSuggestion {;
  text:string,;
  type:'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?:string;
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export interface SearchSuggestion {
  text: string;
}
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
