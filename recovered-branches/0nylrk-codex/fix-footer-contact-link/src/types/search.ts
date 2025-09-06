

  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
=======
}
export interface SearchHighlight {

export interface SearchHighlight {;
  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {

    label: string
    value: string
    label: string,
    value: string;
  }[];
  locations: {
    label: string
    value: string
  }[];
  availabilityOptions: {
    label: string

    value: string
  }[];
  ratingOptions: number[]
}
export interface SearchSuggestion {;
  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
}

  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {

  }[];
  locations: {
    label: string
    value: string
  }[];
  availabilityOptions: {
    label: string

    value: string
  }[];
  ratingOptions: number[]

  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  after: string;
}
export interface FilterOptions {
  product_types: {
    label: string,
    value: string;
  }[];
  ratingOptions: number[];

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
;
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
