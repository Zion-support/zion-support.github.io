
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface SearchSuggestion {
=======
export interface SearchSuggestion {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface SearchSuggestion {
export interface SearchSuggestion {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface SearchHighlight {
=======

export interface SearchHighlight {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export interface SearchHighlight {

export interface SearchHighlight {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {
<<<<<<< HEAD
<<<<<<< HEAD

    label: string
    value: string
=======
    label: string,
    value: string;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

    label: string
    value: string
    label: string,
    value: string;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
export interface SearchSuggestion {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
}
export interface SearchSuggestion {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
=======
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
export interface SearchHighlight {
  before: string;
  match: string,
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  after: string;
}
export interface FilterOptions {
  product_types: {
    label: string,
    value: string;
  }[];
<<<<<<< HEAD
  ratingOptions: number[];
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
  ratingOptions: number[];
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  locations: {
    label: string,
    value: string;
  }[];
  availability_options: {
    label: string,
    value: string;
  }[];
  rating_options: number[];

}
=======


export interface SearchSuggestion {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
;
