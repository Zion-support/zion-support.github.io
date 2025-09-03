
interface Address {
  name: string;
   address: string;
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
 * @returns {*} Function return value;
 */
function CheckoutShippingOptions ({ toAddress, onSelect }: Props) { const [rates, setRates] = useState < ShippingRate[]> ([])  const [loading, setLoading] = useState (false)  const [selected, setSelected] = useState < string> (')  useEffect ( () => { if (!toAddress) return try { if (res.ok) { setRates (data.rates || []) } else {'''""