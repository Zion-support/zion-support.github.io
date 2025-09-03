<<<<<<< HEAD

=======
>>>>>>> main

interface: Address {
  name: string;
   address: string;
<<<<<<< HEAD
   city: string;
   country: strin,g} interface: ShippingRate {
  id: string;
   carrier: string;
   service: string;
   rate: string;
   currency: string;
   delivery_days?: number: | null;
   tax?: strin,g} interface: Props {
  toAddress: Address: | null;
   onSelect?: (rate: ShippingRate) => voi,d} export: /**;
 * CheckoutShippingOptions: function;
 * @param: {*} params - Function parameters;
 * @returns: {*} Function return value;
 */
function: CheckoutShippingOptions ({ toAddress, onSelect }: Props) { const: [rates, setRates] = useState < ShippingRate[]> ([])  const [loading, setLoading] = useState (false)  const [selected, setSelected] = useState < string> (')  useEffect ( () => { if (!toAddress) return try { if (res.ok) { setRates (data.rates || []) } else {'''"";
=======
   cit,
    y: string;
   countr,
    y: string} interface ShippingRate {
  id: string;
   carrier: string;
   service: string;
   rat,
    e: string;
   currenc,
    y: string;
   delivery_days?: number | null;
   tax?: string} interface Props {
  toAddress: Address | null;
   onSelect?: (rat,
    e: ShippingRate) => void} export /**;
 * CheckoutShippingOptions function;
 * @param {*} params - Function parameters;
 * @returns {*} Function return value
 */
<<<<<<< HEAD
function CheckoutShippingOptions ({ toAddress, onSelect }: Props) { const [rates, setRates] = useState < ShippingRate[]> ([]) ; const [loading, setLoading] = useState (false) ; const [selected, setSelected] = useState < string> (") ; useEffect ( () => { if (!toAddress) return; try { if (res.ok) { setRates (data.rates || []) } else {"""";

interface Address { name: string; address: string; city: string; country: string } interface ShippingRate { id: string; carrier: string; service: string; rate: string; currency: string; delivery_days?: number | null; tax?: string } interface Props { toAddress: Address | null; onSelect?: (rate: ShippingRate) => void } export function CheckoutShippingOptions({ toAddress, onSelect }: Props) { const [rates, setRates] = useState<ShippingRate[]>([]); const [loading, setLoading] = useState(false); const [selected, setSelected] = useState<string>("); useEffect(() => { if(!toAddress) return; try { if(res.ok) { setRates(data.rates || [])} else {
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
function CheckoutShippingOptions ({ toAddress, onSelect }: Props) { const [rates, setRates] = useState < ShippingRate[]> ([])  const [loading, setLoading] = useState (false)  const [selected, setSelected] = useState < string> (')  useEffect ( () => { if (!toAddress) return try { if (res.ok) { setRates (data.rates || []) } else {'''""
>>>>>>> main
>>>>>>> main
