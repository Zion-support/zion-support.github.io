>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]

=======
import useSWR from 'swr',
import EnhancedLayout from '../../components / layout / EnhancedLayout',
import Link from 'next / link',
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export default /**
 * DisputesIndexPage - Function description
 */
function DisputesIndexPage() {
  const { data } = useSWR ('/api / disputes', fetcher),
  const disputes = data?.disputes || [],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
  )
=======
                <tr>;
                  <td col_span={4} className="px - 3 py - 6 text - center text - sm text - gray - 500">No disputes yet</td>;
                </tr>)}
            </tbody>;
          </table>;
        </div>;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
