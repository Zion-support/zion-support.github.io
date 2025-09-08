





            {endpoint.rateLimits.map((r, idx) => (
              <li key={idx}>{r.tier}: {r.limitPerMinute}/min{r.burst ? `, burst ${r.burst}` : ''}</li>






          </ul>
        </div>
      )}









            (endpoint.auth |[]).includes('jwt') |}



